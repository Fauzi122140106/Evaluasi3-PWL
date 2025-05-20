'use client'
import { useEffect } from 'react'
import { initWebVitals } from '@/lib/webVitals'

export const metadata = {
  title: "Berita Terkini Indonesia",
  description: "Situs berita terkini dan terpercaya",
  openGraph: {
    title: "Berita Terkini Indonesia",
    description: "Situs berita terkini dan terpercaya",
    url: "https://contoh-berita.com",
    siteName: "Berita Terkini",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  useEffect(() => {
    initWebVitals()
  }, [])

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              "name": "Berita Terkini",
              "url": "https://contoh-berita.com",
              "logo": "https://contoh-berita.com/logo.png",
              "sameAs": ["https://twitter.com/beritatop"]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
