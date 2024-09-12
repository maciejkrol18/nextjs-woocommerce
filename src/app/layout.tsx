import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  metadataBase: new URL(
    `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
  ),
  title: {
    default: 'Next.js + WooCommerce',
    template: '%s | Next.js + WooCommerce',
  },
  description:
    'An attempt to use WooCommerce as a headless CMS for a custom Next.js storefront',
  keywords: ['nextjs', 'woocommerce', 'headless', 'cms', 'commerce', 'ecommerce'],
  creator: 'Maciej Król',
  authors: [
    {
      name: 'Maciej Król',
      url: 'https://github.com/maciejkrol18',
    },
  ],
  openGraph: {
    title: 'Next.js + WooCommerce',
    description:
      'An attempt to use WooCommerce as a headless CMS for a custom Next.js storefront',
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`,
    siteName: 'Next.js + WooCommerce',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-slate-100 font-sans dark`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="py-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
