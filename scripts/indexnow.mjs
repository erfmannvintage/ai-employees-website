// IndexNow auto-ping — notifies Bing/Yandex/etc. on every production deploy.
//
// Reads URLs from dist/sitemap.xml and submits them in one batch to the
// IndexNow aggregator endpoint (api.indexnow.org), which forwards to all
// participating engines. Skips anything that isn't a Netlify production
// deploy so local builds and deploy previews don't ping search engines.
//
// Override for local testing: INDEXNOW_FORCE=1 node scripts/indexnow.mjs

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SITEMAP = path.resolve(__dirname, '..', 'dist', 'sitemap.xml')
const HOST = 'sidekicc.com'
const KEY = '1c5c6d96dfe44e3080778bc076e476fe'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const ENDPOINT = 'https://api.indexnow.org/indexnow'

const force = process.env.INDEXNOW_FORCE === '1'
if (!force) {
  if (!process.env.NETLIFY) {
    console.log('[indexnow] skipping — not running on Netlify (set INDEXNOW_FORCE=1 to override)')
    process.exit(0)
  }
  if (process.env.CONTEXT && process.env.CONTEXT !== 'production') {
    console.log(`[indexnow] skipping — Netlify CONTEXT=${process.env.CONTEXT} (production only)`)
    process.exit(0)
  }
}

let xml
try {
  xml = await readFile(SITEMAP, 'utf8')
} catch (err) {
  console.error(`[indexnow] failed to read ${SITEMAP}:`, err.message)
  process.exit(1)
}

const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim())
if (urls.length === 0) {
  console.error('[indexnow] no <loc> entries found in sitemap — aborting')
  process.exit(1)
}

const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }

console.log(`[indexnow] submitting ${urls.length} URLs to ${ENDPOINT}`)

let res
try {
  res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
} catch (err) {
  console.error('[indexnow] network error:', err.message)
  process.exit(0) // don't fail the deploy on a transient network hiccup
}

const text = await res.text().catch(() => '')
if (res.ok || res.status === 200 || res.status === 202) {
  console.log(`[indexnow] success (HTTP ${res.status})`)
} else {
  console.warn(`[indexnow] unexpected response (HTTP ${res.status}): ${text.slice(0, 200)}`)
}
