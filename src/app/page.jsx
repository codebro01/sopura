import Image from 'next/image'
import styles from './page.module.css'
import { Grid, Box } from '@mui/material'
import { HeroComponent } from '@/components/HeroComponent'
import Head from 'next/head'
import { AboutUsComponent } from '@/components/AboutUsComponent'
import { ClientsComponent } from '@/components/ClientsComponent'
import { ProductOffering } from '@/components/ProductOfferingComponent'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'Sopura | Home',
  description: 'Sopura Business Concept',
  keywords: 'business, concept, Sopura',
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
        <Footer />
      </Grid>
    </>
  )
}
