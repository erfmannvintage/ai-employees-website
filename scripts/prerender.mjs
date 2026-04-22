// Static prerender for SPA routes — post-build step.
// Serves the built dist/, crawls every route with a headless Chromium, and writes
// fully-rendered HTML to dist/{route}/index.html. Non-JS-executing crawlers
// (Claude, Perplexity, older Bing bots) then see real content instead of the bare
// SPA shell.
//
// Usage: node scripts/prerender.mjs
// Env: PLAYWRIGHT_BROWSERS_PATH=0 npx playwright install chromium  (once per repo)

import { chromium } from 'playwright'
import handler from 'serve-handler'
import { createServer } from 'node:http'
import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.resolve(__dirname, '..', 'dist')
const PORT = 8765

// Prerender `/` LAST — writing to dist/index.html changes what serve-handler
// falls back to, which would poison subsequent crawls.
// Also emit a 404 page (rendered via the catch-all route in App) to dist/404.html
// so Netlify serves it for unknown URLs.
const routes = [
  '/pricing',
  '/about',
  '/integrations',
  '/blog',
  '/blog/ai-workforce-roi-breakdown',
  '/blog/replace-freelancers-with-ai-playbook',
  '/help',
  '/contact',
  '/privacy',
  '/terms',
  '/cookies',
  '/refund',
  '/employee/cecil',
  '/employee/flora',
  '/employee/basil',
  '/employee/hugh',
  '/employee/mabel',
  '/employee/rupert',
  '/employee/poppi',
  '/employee/ava',
  '/employee/raymond',
  '/employee/bowie',
  '/employee/angela',
  '/404', // triggers catch-all NotFound route
  '/', // must be last — writes dist/index.html
]

console.log(`Prerendering ${routes.length} routes from ${DIST}…`)

// 1. Serve dist/ with SPA rewrite so all routes resolve to index.html during crawl
const server = createServer((req, res) => {
  return handler(req, res, {
    public: DIST,
    rewrites: [{ source: '**', destination: '/index.html' }],
  })
})

await new Promise((resolve) => server.listen(PORT, resolve))
console.log(`Static server listening on :${PORT}`)

// 2. Launch headless Chromium
const browser = await chromium.launch()

let failed = 0

for (const route of routes) {
  const url = `http://localhost:${PORT}${route}`
  // Fresh context + page per route so no React / Helmet state carries over
  const ctx = await browser.newContext({
    userAgent: 'Mozilla/5.0 (compatible; Sidekicc-Prerender/1.0)',
    viewport: { width: 1280, height: 720 },
  })
  const page = await ctx.newPage()
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(500)

    // Mark Helmet-managed <head> tags with data-rh="true" so react-helmet-async
    // recognises them on hydration and assumes ownership instead of injecting
    // duplicates. Without this, Bing / Google JS-rendering crawlers see two
    // <title>, <meta description>, and <link canonical> tags on every page.
    await page.evaluate(() => {
      const selectors = [
        'head > title',
        'head > meta[name="description"]',
        'head > meta[name="robots"]',
        'head > meta[property^="og:"]',
        'head > meta[name^="twitter:"]',
        'head > link[rel="canonical"]',
        'head > script[type="application/ld+json"]',
      ]
      document.querySelectorAll(selectors.join(',')).forEach((el) => {
        el.setAttribute('data-rh', 'true')
      })
    })

    const html = await page.content()
    let out
    if (route === '/') out = path.join(DIST, 'index.html')
    else if (route === '/404') out = path.join(DIST, '404.html')
    else out = path.join(DIST, route, 'index.html')
    await mkdir(path.dirname(out), { recursive: true })
    await writeFile(out, html, 'utf8')
    console.log(`  ✓ ${route.padEnd(28)} → ${path.relative(DIST, out)}`)
  } catch (err) {
    console.error(`  ✗ ${route}: ${err.message}`)
    failed++
  } finally {
    await ctx.close()
  }
}

await browser.close()
await new Promise((resolve) => server.close(resolve))

if (failed > 0) {
  console.error(`\n${failed} route(s) failed to prerender.`)
  process.exit(1)
}

console.log(`\nPrerender complete — ${routes.length} routes written.`)
