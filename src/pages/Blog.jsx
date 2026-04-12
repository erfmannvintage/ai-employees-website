import { Link } from 'react-router-dom'

const posts = [
  {
    title: 'Why 77% of Businesses Fail at AI (And How to Be the 5% That Succeed)',
    excerpt: 'The AI adoption gap is massive. Most businesses know AI is transformational but can\'t figure out how to implement it. Here\'s what the successful 5% do differently.',
    category: 'AI Strategy',
    date: 'April 10, 2026',
    readTime: '6 min read',
    color: '#FF3366',
  },
  {
    title: 'The Complete Guide to AI-Powered Marketing in 2026',
    excerpt: 'From content creation to ad optimization to analytics — how AI is reshaping every aspect of marketing, and how to stay ahead.',
    category: 'Marketing',
    date: 'April 8, 2026',
    readTime: '8 min read',
    color: '#0066FF',
  },
  {
    title: 'How to Replace 3 Freelancers with AI Employees (Case Study)',
    excerpt: 'A real-world case study showing how one e-commerce founder replaced freelance writers, social managers, and data analysts with AI Employees.',
    category: 'Case Study',
    date: 'April 5, 2026',
    readTime: '5 min read',
    color: '#00CC66',
  },
  {
    title: 'SEO in the Age of AI: What Google Actually Wants in 2026',
    excerpt: 'Google\'s algorithms have evolved. Here\'s what Mabel (our SEO AI) has learned about ranking in the new search landscape.',
    category: 'SEO',
    date: 'April 2, 2026',
    readTime: '7 min read',
    color: '#9933FF',
  },
  {
    title: 'The ROI of an AI Workforce: Breaking Down the Numbers',
    excerpt: 'We did the math. Here\'s exactly how much time and money businesses save when they deploy a full AI workforce vs. hiring humans or freelancers.',
    category: 'Business',
    date: 'March 28, 2026',
    readTime: '6 min read',
    color: '#FFD700',
  },
  {
    title: 'Building a Content Pipeline That Runs on Autopilot',
    excerpt: 'How to set up Flora, Mabel, and Poppi to create, review, and publish content across every channel — without touching a keyboard.',
    category: 'Content',
    date: 'March 24, 2026',
    readTime: '5 min read',
    color: '#FF6633',
  },
]

export default function Blog() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-paper-warm halftone-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-black text-5xl sm:text-6xl text-ink mb-4">
            The AI Employees{' '}
            <span className="text-pop-pink">Blog</span>
          </h1>
          <p className="text-lg text-ink-light max-w-2xl mx-auto">
            Insights, strategies, and case studies on building a business powered by AI.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group bg-white rounded-xl border-3 border-ink shadow-[5px_5px_0_var(--color-ink)] hover:shadow-[3px_3px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all overflow-hidden"
              >
                {/* Color bar */}
                <div className="h-2" style={{ backgroundColor: post.color }} />

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 text-xs font-bold text-white rounded-full"
                      style={{ backgroundColor: post.color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-ink-muted">{post.readTime}</span>
                  </div>

                  <h2 className="font-bold text-lg text-ink leading-snug mb-3 group-hover:text-pop-pink transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-ink-muted">{post.date}</span>
                    <span className="text-sm font-semibold text-pop-pink">
                      Read more &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-20 bg-paper-cool">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl border-3 border-ink p-8 lg:p-10 shadow-[6px_6px_0_var(--color-ink)]">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-ink mb-3">
              Stay in the Loop
            </h2>
            <p className="text-ink-muted mb-6">
              Get the latest AI workforce insights delivered to your inbox. No spam, ever.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 border-2 border-ink rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-pop-pink"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-pop-pink text-white font-bold rounded-lg border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] hover:shadow-[1px_1px_0_var(--color-ink)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
