import React from 'react'
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

export const ProductOffering = () => {
  const centerElementStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const products = [
    {
      id: 1,
      title: 'FGN Bonds',
      icon: Briefcase,
      color: '#55b24a',
      description: 'Federal Government of Nigeria Bonds',
    },
    {
      id: 2,
      title: 'Treasury Bills',
      icon: MonetizationOn,
      color: '#ff1b1c',
      description: 'Short-term debt securities',
    },
    {
      id: 3,
      title: 'State Government Bonds',
      icon: Business,
      color: '#3f51b5',
      description: 'Bonds issued by state governments',
    },
    {
      id: 4,
      title: 'Local Contractor Bonds',
      icon: Construction,
      color: '#ff9800',
      description: 'Bonds for local contractors',
    },
    {
      id: 5,
      title: 'Corporate Bonds',
      icon: BarChart,
      color: '#f50057',
      description: 'Bonds issued by corporations',
    },
    {
      id: 6,
      title: 'Eurobonds',
      icon: Language,
      color: '#55b24a',
      description:
        'International bonds denominated in a currency not native to the issuer',
    },
    {
      id: 7,
      title: 'Others',
      icon: MoreHoriz,
      color: '#3f51b5',
      description: 'Additional bond options and securities',
    },
  ]
  return (
    <Box
      component={'section'}
      sx={{
        // padding: "clamp(10px, 5vw, 30px)", 
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
            xs: 'auto',
            sm: 'repeat(3, 1fr)',
          },
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
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}
