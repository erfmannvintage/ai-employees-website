import { Helmet } from 'react-helmet-async'

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sidekicc',
  url: 'https://sidekicc.com',
  logo: 'https://sidekicc.com/logo.png',
  description: 'Sidekicc provides 11 AI employees that handle marketing, sales, support, content, analytics, legal, advertising, research, and finance for small and medium businesses.',
  sameAs: [],
  address: { '@type': 'PostalAddress', addressCountry: 'GB' },
  contactPoint: { '@type': 'ContactPoint', email: 'hello@sidekicc.com', contactType: 'customer support', availableLanguage: ['English'] },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: 'https://sidekicc.com',
  name: 'Sidekicc',
  description: '11 AI employees for your business — marketing, sales, support, content, finance, legal, ads, research, analytics.',
  inLanguage: 'en-GB',
  publisher: { '@type': 'Organization', name: 'Sidekicc' },
}

export default function SiteSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organization)}</script>
      <script type="application/ld+json">{JSON.stringify(website)}</script>
    </Helmet>
  )
}
