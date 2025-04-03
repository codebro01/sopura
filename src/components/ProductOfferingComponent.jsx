'use client'

import React, { useEffect } from 'react'
import { Box, Typography, Grid, Container } from '@mui/material'
import { ProductsOfferingCard } from './ProductsOfferingCard'
import {
  Briefcase,
  Coins as MonetizationOn,
  Building as Business,
  Hammer as Construction,
  BarChart3 as BarChart,
  Globe as Language,
  MoreHorizontal as MoreHoriz,
} from 'lucide-react'
import AOS from 'aos'

export const ProductOffering = () => {
  const centerElementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  useEffect(() => {
    AOS.init({
      offset: 50, // Reduce to trigger sooner
    })
  }, [])

  const products = [
    {
      id: 1,
      title: 'FGN Bonds',
      icon: Briefcase,
      color: '#55b24a',
      description: 'Federal Government of Nigeria Bonds',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '200',
    },
    {
      id: 2,
      title: 'Treasury Bills',
      icon: MonetizationOn,
      color: '#ff1b1c',
      description: 'Short-term debt securities',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '400',
    },
    {
      id: 3,
      title: 'State Government Bonds',
      icon: Business,
      color: '#3f51b5',
      description: 'Bonds issued by state governments',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '600',
    },
    {
      id: 4,
      title: 'Local Contractor Bonds',
      icon: Construction,
      color: '#ff9800',
      description: 'Bonds for local contractors',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '200',
    },
    {
      id: 5,
      title: 'Corporate Bonds',
      icon: BarChart,
      color: '#f50057',
      description: 'Bonds issued by corporations',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '400',
    },
    {
      id: 6,
      title: 'Eurobonds',
      icon: Language,
      color: '#55b24a',
      description:
        'International bonds denominated in a currency not native to the issuer',
      ['data-aos']: 'zoom-out-up',
      ['data-aos-anchor-placement']: 'center-bottom',
      ['data-aos-duration']: '400',
    },
    // {
    //   id: 7,
    //   title: 'Others',
    //   icon: MoreHoriz,
    //   color: '#3f51b5',
    //   description: 'Additional bond options and securities',
    // },
  ]
  return (
    <Box
      component={'section'}
      sx={{
        flexWrap: 'wrap',
        // padding: "clamp(10px, 5vw, 30px)",
        px: {
          xs: '0px',
          md: '20px',
          lg: '80px',
        },
        position: 'relative',
        minHeight: '50vh',
        width: '100%',
        mt: 15,
      }}
    >
      <Box
        sx={{
          ...centerElementStyle,
          width: '100%',
        }}
      >
        <Typography
          position={'relative'}
          className="underline"
          variant="h3"
          textAlign={'center'}
        >
          Product Offerings
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr', // Single column on extra-small screens (mobile)
            sm: 'repeat(2, minmax(150px, 1fr))', // Two flexible columns for small screens
            // md: 'repeat(2, minmax(200px, 1fr))', // Three columns on medium screens
            lg: 'repeat(3, minmax(250px, 1fr))', // Four columns on large screens
            xl: 'repeat(4, minmax(300px, 1fr))', // Five columns on extra-large screens
          },
          columnSpacing: 5,
          columnGap: 5,
        }}
        pl={5}
        pr={5}
        gap={3}
      >
        {products.map((product) => (
          <Box width={'100%'} key={product.id}>
            <ProductsOfferingCard
              title={product.title}
              Icon={product.icon}
              color={product.color}
              description={product.description}
              aosValue={product['data-aos']}
              aosAnchorPlacement={product['data-aos-anchor-placement']}
              aosDuration={product['data-aos-duration']}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
