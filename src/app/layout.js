'use client'
import Head from 'next/head'
import {
  CssBaseline,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material'
import { Geist, Geist_Mono, Kanit, Outfit } from 'next/font/google'
import ThemeRegistry from '../../themeRegistry'
import { NavbarComponent } from '../components/NavbarComponent'
import { Footer } from '@/components/Footer'
import './globals.css'
import 'aos/dist/aos.css'
import 'animate.css'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
})
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '500', '700'],
})

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.sopurabiz.com.ng/" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'https://www.sopurabiz.com.ng',
            logo: 'https://www.sopurabiz.com.ng/logo.png',
          })}
        </script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} ${outfit.variable} antialiased`}
      >
        <ThemeRegistry>
          <NavbarComponent />

          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
