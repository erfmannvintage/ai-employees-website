import { Helmet } from 'react-helmet-async'

const SITE = 'https://sidekicc.com'

export default function SEO({
  title,
  description,
  path = '/',
  ogImage = '/og-image.png',
  ogType = 'website',
  jsonLd,
  noindex = false,
}) {
  const canonical = `${SITE}${path}`
  const fullTitle = title.includes('Sidekicc') ? title : `${title} | Sidekicc`
  const img = ogImage.startsWith('http') ? ogImage : `${SITE}${ogImage}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="Sidekicc" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  )
}
