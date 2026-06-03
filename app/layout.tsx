import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import LandingSplash from '@/components/landing-splash'
import LandingSplashController from '@/components/landing-splash-controller'

export const metadata: Metadata = {
  title: 'FYP — For Your Profession',
  description: 'Turn Doom Scrolling into Career Capital. The FYP app transforms your feed into professional development with career tracks, quests, and progress tracking.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'FYP — For Your Profession',
    description: 'Turn Doom Scrolling into Career Capital. Transform your feed into professional growth.',
    type: 'website',
    url: 'https://for-your-profession.vercel.app',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FYP — Turn Doom Scrolling into Career Capital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FYP — For Your Profession',
    description: 'Turn Doom Scrolling into Career Capital',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#131313',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Server-rendered landing splash - visible immediately on first paint */}
        <div id="landing-splash">
          <LandingSplash />
        </div>

        {/* Client-side controller that hides splash after hydration */}
        <LandingSplashController />

        {/* Main app content */}
        {children}

        <Analytics />
      </body>
    </html>
  )
}