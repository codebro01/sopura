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

export const metadata = {
  title: 'Sopura | Home',
  description:
    'Sopura Business Concept is a financial service provider with exclusivity in inter-dealer broking of financial instruments  between dealers and financial institutions.',
  keywords:
    'business, concept, sopura, sopura finance, business, nigeria, sopura africa, sopura, sopura, sopura Nigeria, Nigeria, finance, company ',
  icons: {
    icon: '/logo.png', // or '/favicon.png'
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
        <ClientsComponent />
        <ProductOffering />
        <TeamSection />
      </Grid>
    </>
  )
}
