import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const siteUrl = 'https://djts.co.jp'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '株式会社DJTS | WEBマーケティング',
    template: '%s | 株式会社DJTS',
  },
  description:
    '株式会社DJTSは、SEO対策・Web広告・SNSマーケティング・コンテンツマーケティングを通じて、企業のデジタルマーケティングを総合的に支援します。',
  keywords: ['WEBマーケティング', 'SEO対策', 'Web広告', 'SNSマーケティング', 'コンテンツマーケティング', 'DJTS'],
  authors: [{ name: '株式会社DJTS' }],
  creator: '株式会社DJTS',
  // Google Search Console 確認タグ
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: '株式会社DJTS',
    title: '株式会社DJTS | WEBマーケティング',
    description:
      'SEO対策・Web広告・SNSマーケティング・コンテンツマーケティングを通じて、企業のデジタルマーケティングを総合的に支援します。',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '株式会社DJTS' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社DJTS | WEBマーケティング',
    description: 'SEO対策・Web広告・SNSマーケティングで企業のデジタルマーケティングを支援します。',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {/* Core Web Vitals: フォント preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ''} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
