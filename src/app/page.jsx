import Image from 'next/image'
import styles from './page.module.css'
import { Grid, Box } from '@mui/material'
import { HeroComponent } from '@/components/HeroComponent'
import Head from 'next/head'
import { AboutUsComponent } from '@/components/AboutUsComponent'
import { ClientsComponent } from '@/components/ClientsComponent'
import { ProductOffering } from '@/components/ProductOfferingComponent'
import { TeamSection } from '@/components/TeamMembersComponent'
import { Footer } from '@/components/Footer'
import { SplideJsComponent } from '@/components/SplideJsComponent';

export const metadata = {
  title: 'Sopura | Home',
  description:
    'Sopura Business Concept is a financial service provider with exclusivity in inter-dealer broking of financial instruments  between dealers and financial institutions.',
  keywords:
    'sopurabiz, sopurabiz business, sopura business concept, business, concept, sopura, sopurabiz, sopurabiz business, sopura business concept,  sopura finance, business, nigeria, sopura africa, sopura, sopura, sopura Nigeria, Nigeria, finance, company ',
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
        alt: 'Sopura Business Concept',
      },
    ],
  },
}



export default function Home() {
  return (
    <>
      <Grid
        container
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <HeroComponent />
        <AboutUsComponent />
        <SplideJsComponent />
        <ClientsComponent />
        <ProductOffering />
        <TeamSection />
      </Grid>
    </>
  )
}
