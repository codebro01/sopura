import Image from 'next/image'
import { Grid, Box } from '@mui/material'
import Aboutpage from './aboutPage'

export const metadata = {
  title: 'Sopura | About',
  description:
    'Sopura Business Concept is a financial service provider with exclusivity in inter-dealer broking of financial instruments  between dealers and financial institutions.',
  keywords:
    'sopura, sopura business concept,sopurabiz,  business, concept, sopurabiz business, sopura finance, business, nigeria, sopura africa, sopura, sopura, sopura Nigeria, Nigeria, finance, company ',
  icons: {
    icon: '/logo.png', // or '/favicon.png'
  },
  openGraph: {
    type: 'website',
    url: 'https://www.sopurabiz.com.ng',
    title: 'Sopura Business Concept',
    description:
      'Sopura Business Concept is a financial service provider with exclusivity in inter-dealer broking of financial instruments.',
    images: [
      {
        url: 'https://www.sopurabiz.com.ng/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sopura Biz Logo',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Aboutpage />
    </>
  )
}
